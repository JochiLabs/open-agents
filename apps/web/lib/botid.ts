/**
 * BotID protection — disabled for self-hosted deployments.
 *
 * The upstream Vercel BotID integration requires infrastructure
 * (API keys, fingerprinting endpoints) that only exists on the
 * official open-agents.dev deployment. For self-hosted forks we
 * bypass the check entirely.
 */

export const botIdConfig = {};

export async function checkBotProtection() {
      return {
              isHuman: true,
              isBot: false,
              isVerifiedBot: false,
              bypassed: true,
      };
}
