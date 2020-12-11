export const INIT_SUSHIS = "INIT_SUSHIS";

export function initSushis(sushis) {
  return {
    type: INIT_SUSHIS,
    payload: { sushis: sushis || [] },
  };
}
