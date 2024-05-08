enum OVERWATCH_ROLES {
  TANK = "tank",
  DAMAGE = "damage",
  SUP = "support",
}

const TANK_HEROES = ["reinhardt", "roadhog", "winston", "sigma", "zarya", "junker_queen"];
const DAMAGE_HEROES = ["cassidy", "junkrat"];
const SUPPORT_HEROES = ["ana", "baptiste", "kiriko", "zenyatta", "moira", "illari", "brigitte"];

const ROLE_TO_HEROES_MAP: { [role in OVERWATCH_ROLES]: string[] } = {
  [OVERWATCH_ROLES.TANK]: TANK_HEROES,
  [OVERWATCH_ROLES.DAMAGE]: DAMAGE_HEROES,
  [OVERWATCH_ROLES.SUP]: SUPPORT_HEROES,
};

export { OVERWATCH_ROLES, ROLE_TO_HEROES_MAP };
