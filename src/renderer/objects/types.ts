export const resourceTypes = ['metal', 'water', 'ice', 'rock'] as const
export type ResourceType = typeof resourceTypes[number]
