use anchor_lang::prelude::*;

declare_id!("PERPX11111111111111111111111111111111111");

#[program]
pub mod perpetual {
    use super::*;

    pub fn create_market(
        _ctx: Context<CreateMarket>,
        symbol: String,
    ) -> Result<()> {
        msg!("Perpetual market created: {}", symbol);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateMarket<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
