import fs from "node:fs";
import path from "node:path";

import stringify from "json-stable-stringify-without-jsonify";
import tmp from "tmp";

import yaml from "../../lib/util/yaml";

export const mockDir: string = tmp.dirSync().name;
const configFile = path.join(mockDir, "configuration.yaml");
const stateFile = path.join(mockDir, "state.json");
const databaseFile = path.join(mockDir, "database.db");

export const DEFAULT_CONFIGURATION = {
    homeassistant: {enabled: false},
    frontend: {enabled: false},
    availability: {enabled: false},
    mqtt: {
        base_topic: "zigbee2mqtt",
        server: "mqtt://localhost",
    },
    serial: {
        port: "/dev/dummy",
    },
    devices: {
        "0x18fc2600000d7ae2": {
            friendly_name: "bosch_radiator",
        },
        "0x000b57fffec6a5b2": {
            retain: true,
            friendly_name: "bulb",
            description: "this is my bulb",
        },
        "0x0017880104e45517": {
            retain: true,
            friendly_name: "remote",
        },
        "0x0017880104e45520": {
            retain: false,
            friendly_name: "button",
        },
        "0x0017880104e45521": {
            retain: false,
            friendly_name: "button_double_key",
        },
        "0x0017880104e45522": {
            qos: 1,
            retain: false,
            friendly_name: "weather_sensor",
        },
        "0x0017880104e45523": {
            retain: false,
            friendly_name: "occupancy_sensor",
        },
        "0x0017880104e45524": {
            retain: false,
            friendly_name: "power_plug",
        },
        "0x0017880104e45530": {
            retain: false,
            friendly_name: "button_double_key_interviewing",
        },
        "0x0017880104e45540": {
            friendly_name: "ikea_onoff",
        },
        "0x000b57fffec6a5b7": {
            retain: false,
            friendly_name: "bulb_2",
        },
        "0x000b57fffec6a5b3": {
            retain: false,
            friendly_name: "bulb_color",
        },
        "0x000b57fffec6a5b4": {
            retain: false,
            friendly_name: "bulb_color_2",
        },
        "0x0017880104e45541": {
            retain: false,
            friendly_name: "wall_switch",
        },
        "0x0017880104e45542": {
            retain: false,
            friendly_name: "wall_switch_double",
        },
        "0x0017880104e45543": {
            retain: false,
            friendly_name: "led_controller_1",
        },
        "0x0017880104e45544": {
            retain: false,
            friendly_name: "led_controller_2",
        },
        "0x0017880104e45545": {
            retain: false,
            friendly_name: "dimmer_wall_switch",
        },
        "0x0017880104e45547": {
            retain: false,
            friendly_name: "curtain",
        },
        "0x0017880104e45548": {
            retain: false,
            friendly_name: "fan",
        },
        "0x0017880104e45549": {
            retain: false,
            friendly_name: "siren",
        },
        "0x0017880104e45529": {
            retain: false,
            friendly_name: "unsupported2",
        },
        "0x0017880104e45550": {
            retain: false,
            friendly_name: "thermostat",
        },
        "0x0017880104e45551": {
            retain: false,
            friendly_name: "smart vent",
        },
        "0x0017880104e45552": {
            retain: false,
            friendly_name: "j1",
        },
        "0x0017880104e45553": {
            retain: false,
            friendly_name: "bulb_enddevice",
        },
        "0x0017880104e45559": {
            retain: false,
            friendly_name: "cc2530_router",
        },
        "0x0017880104e45560": {
            retain: false,
            friendly_name: "livolo",
        },
        "0x90fd9ffffe4b64ae": {
            retain: false,
            friendly_name: "tradfri_remote",
        },
        "0x90fd9ffffe4b64af": {
            friendly_name: "roller_shutter",
        },
        "0x90fd9ffffe4b64ax": {
            friendly_name: "ZNLDP12LM",
        },
        "0x90fd9ffffe4b64aa": {
            friendly_name: "SP600_OLD",
        },
        "0x90fd9ffffe4b64ab": {
            friendly_name: "SP600_NEW",
        },
        "0x90fd9ffffe4b64ac": {
            friendly_name: "MKS-CM-W5",
        },
        "0x0017880104e45526": {
            friendly_name: "GL-S-007ZS",
        },
        "0x0017880104e43559": {
            friendly_name: "U202DST600ZB",
        },
        "0xf4ce368a38be56a1": {
            retain: false,
            friendly_name: "zigfred_plus",
            front_surface_enabled: "true",
            dimmer_1_enabled: "true",
            dimmer_1_dimming_enabled: "true",
            dimmer_2_enabled: "true",
            dimmer_2_dimming_enabled: "true",
            dimmer_3_enabled: "true",
            dimmer_3_dimming_enabled: "true",
            dimmer_4_enabled: "true",
            dimmer_4_dimming_enabled: "true",
            cover_1_enabled: "true",
            cover_1_tilt_enabled: "true",
            cover_2_enabled: "true",
            cover_2_tilt_enabled: "true",
        },
        "0x0017880104e44559": {
            friendly_name: "3157100_thermostat",
        },
        "0x0017880104a44559": {
            friendly_name: "J1_cover",
        },
        "0x0017882104a44559": {
            friendly_name: "TS0601_thermostat",
        },
        "0x0017882104a44560": {
            friendly_name: "TS0601_switch",
        },
        "0x0017882104a44562": {
            friendly_name: "TS0601_cover_switch",
        },
        "0x0017882194e45543": {
            friendly_name: "QS-Zigbee-D02-TRIAC-2C-LN",
        },
        "0x0017880104e45724": {
            friendly_name: "GLEDOPTO_2ID",
        },
        "0x0017880104e45561": {
            friendly_name: "temperature_sensor",
        },
        "0x0017880104e45562": {
            friendly_name: "heating_actuator",
        },
        "0x000b57cdfec6a5b3": {
            friendly_name: "hue_twilight",
        },
        "0x00124b00cfcf3298": {
            friendly_name: "fanbee",
            retain: true,
        },
    },
    groups: {
        1: {
            friendly_name: "group_1",
            retain: false,
        },
        2: {
            friendly_name: "group_2",
            retain: false,
        },
        15071: {
            friendly_name: "group_tradfri_remote",
            retain: false,
        },
        11: {
            friendly_name: "group_with_tradfri",
            retain: false,
        },
        12: {
            friendly_name: "thermostat_group",
            retain: false,
        },
        14: {
            friendly_name: "switch_group",
            retain: false,
        },
        21: {
            friendly_name: "gledopto_group",
        },
        9: {
            friendly_name: "ha_discovery_group",
        },
        19: {
            friendly_name: "hue_twilight_group",
        },
    },
};

export function writeDefaultConfiguration(config: unknown = undefined): void {
    config = config || DEFAULT_CONFIGURATION;

    yaml.writeIfChanged(configFile, config);
}

export function read(): ReturnType<typeof yaml.read> {
    return yaml.read(configFile);
}

export function removeConfiguration(): void {
    fs.rmSync(configFile, {force: true});
}

export function writeEmptyState(): void {
    fs.writeFileSync(stateFile, stringify({}));
}

export function removeState(): void {
    fs.rmSync(stateFile, {force: true});
}

export function stateExists(): boolean {
    return fs.existsSync(stateFile);
}

const defaultState = {
    "0x000b57fffec6a5b2": {
        state: "ON",
        brightness: 50,
        color_temp: 370,
        linkquality: 99,
    },
    "0x0017880104e45517": {
        brightness: 255,
    },
    1: {
        state: "ON",
    },
};

export function getDefaultState(): typeof defaultState {
    return defaultState;
}

export function writeDefaultState(): void {
    fs.writeFileSync(path.join(mockDir, "state.json"), stringify(defaultState));
}

export function writeEmptyDatabase(): void {
    fs.writeFileSync(databaseFile, "");
}

export function removeDatabase(): void {
    fs.rmSync(databaseFile, {force: true});
}

vi.mock("../../lib/util/data", async () => {
    const nodePath = await vi.importActual<typeof import("node:path")>("node:path");

    return {
        default: {
            joinPath: (file: string): string => nodePath.join(mockDir, file),
            getPath: (): string => mockDir,
        },
    };
});

writeDefaultConfiguration();
writeDefaultState();
