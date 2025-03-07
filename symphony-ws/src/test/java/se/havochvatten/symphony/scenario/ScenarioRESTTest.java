package se.havochvatten.symphony.scenario;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.mapper.ObjectMapperType;
import io.restassured.response.ExtractableResponse;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import org.junit.Test;
import org.locationtech.jts.io.ParseException;
import se.havochvatten.symphony.dto.CalculationResultSlice;
import se.havochvatten.symphony.dto.MatrixParameters;
import se.havochvatten.symphony.dto.ScenarioDto;
import se.havochvatten.symphony.web.RESTTest;

import java.io.IOException;
import java.util.stream.IntStream;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

public class ScenarioRESTTest extends RESTTest {
    private static final ObjectMapper mapper = new ObjectMapper();

    static ScenarioDto testScenario;

    @BeforeClass
    public static void setup() throws ParseException, IOException {
        testScenario = ScenarioDto.createWithoutId("TEST-SCENARIO", makeBaseline(),
                mapper.readTree(ScenarioRESTTest.class.getClassLoader()
                        .getResourceAsStream("polygons/test.geojson")),
                getDomainNormalization());

    }

    @Test
    public void create() {
        var resp = create(testScenario);
        var scenario = resp.as(ScenarioDto.class);
        assertEquals(getUsername(), scenario.owner);
        assertEquals(testScenario.name, scenario.name);
        // Coordinates may differ slightly, so only check polygon type
        assertEquals(testScenario.feature.get("type"), scenario.feature.get("type"));

        delete(scenario.id);
    }

    @Test
    public void findAll() {
        var resp = create(testScenario);
        Integer createdId = resp.jsonPath().getInt("id");

        var json = given()
                .auth()
                .preemptive()
                .basic(getUsername(), getPassword())
                .get(endpoint("/scenario"))
                .then()
                .statusCode(200)
                .extract().jsonPath();

        var ss = json.getList("", ScenarioDto.class);
        assertFalse(ss.isEmpty());
        assertEquals(createdId, ss.get(0).id); // ordered by timestamp, so should be first

        delete(createdId);
    }

    @Test
    public void update() {
        var resp = create(testScenario);
        var scenario = resp.as(ScenarioDto.class);

        scenario.name = "NEW-NAME";
        var updatedScenario = update(scenario).as(ScenarioDto.class);

        assertEquals("NEW-NAME", updatedScenario.name);
        assertTrue(updatedScenario.timestamp.after(scenario.timestamp));

        delete(scenario.id);
    }

    @Test
    public void calculate() {
        var resp = create(testScenario);
        var testScenario = resp.as(ScenarioDto.class); // shadow

        testScenario.ecosystemsToInclude = IntStream.range(0, 35).toArray();
        testScenario.pressuresToInclude = IntStream.range(0, 41).toArray(); // abrasion bottom trawling and
        // temperature
        // increase
        testScenario.matrix = new MatrixParameters(6); // exists for sympho1 user

        var result = calculate(testScenario);
        delete(testScenario.id);
    }

    private CalculationResultSlice calculate(ScenarioDto s) {
        Response response =
                given().
                        header("Content-Type", "application/json").
                        auth().
                        preemptive().
                        basic(getUsername(), getPassword()).
                        when().
                        body(s).
                        post(endpoint("/calculation/sum/CumulativeImpact"));
        assertEquals(200, response.statusCode());
        return response.as(CalculationResultSlice.class);
    }

    static ExtractableResponse<Response> update(ScenarioDto s) {
        return given()
                .auth()
                .preemptive()
                .basic(getUsername(), getPassword())
                .request()
                .contentType("application/json")
                .body(s) // serialize object
                .when()
                .put(endpoint("/scenario"))
                .then()
                .statusCode(200)
                .extract();
    }

    @Test
    public void delete() {
        var resp = create(testScenario);
        var resp2 = delete(resp.jsonPath().getInt("id"));
        assertEquals(204, resp2.statusCode());
    }

    public static ExtractableResponse<Response> create(ScenarioDto s) {
        return given()
                .auth()
                .preemptive()
                .basic(getUsername(), getPassword())
                .request()
                .contentType("application/json")
                .body(s, ObjectMapperType.JACKSON_2)
                .when()
                .post(endpoint("/scenario"))
                .then()
                .statusCode(201)
                .extract();
    }

    public static Response delete(Integer id) {
        return given().
                auth().
                preemptive().
                basic(getUsername(), getPassword()).
                delete(endpoint("/scenario/") + id);
    }
}
