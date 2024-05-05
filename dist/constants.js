"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_TO_HEROES_MAP = exports.OVERWATCH_ROLES = void 0;
var OVERWATCH_ROLES;
(function (OVERWATCH_ROLES) {
    OVERWATCH_ROLES["TANK"] = "tank";
    OVERWATCH_ROLES["DAMAGE"] = "damage";
    OVERWATCH_ROLES["SUP"] = "support";
})(OVERWATCH_ROLES || (OVERWATCH_ROLES = {}));
exports.OVERWATCH_ROLES = OVERWATCH_ROLES;
var TANK_HEROES = [
    "reinhardt",
    "roadhog",
    "winston",
    "sigma",
    "zarya",
    "junker_queen",
];
var DAMAGE_HEROES = ["cassidy", "junkrat"];
var SUPPORT_HEROES = [
    "ana",
    "baptiste",
    "kiriko",
    "zenyatta",
    "moira",
    "illari",
    "brigitte",
];
var ROLE_TO_HEROES_MAP = (_a = {},
    _a[OVERWATCH_ROLES.TANK] = TANK_HEROES,
    _a[OVERWATCH_ROLES.DAMAGE] = DAMAGE_HEROES,
    _a[OVERWATCH_ROLES.SUP] = SUPPORT_HEROES,
    _a);
exports.ROLE_TO_HEROES_MAP = ROLE_TO_HEROES_MAP;
//# sourceMappingURL=constants.js.map