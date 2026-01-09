import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { AmountDto } from './dto/amount.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  // Async, Await added for getting data asynchronously
  // Reason: Data is brought by the calling other functions. Will be required in the future as more users come.
  @Get('balance')
  async getBalance(@Query('userId') userId: string) {
    const balance = await this.walletService.getBalance(userId);
    return {
      balance,
    };
  }

  // Async, Await added for crediting amount asynchronously
  // Reason: Data is brought by the calling other functions. Will be required in the future as more users come.
  @Post('credit')
  async credit(@Body() body: AmountDto) {
    const balance = await this.walletService.credit(body.userId, body.amount);
    return {
      balance,
    };
  }

  // Await added for debiting data asynchronously
  // Reason: Data is brought by the calling other functions. Will be required in the future as more users come.
  @Post('debit')
  async debit(@Body() body: AmountDto) {
    const wallet = await this.walletService.debit(body.userId, body.amount);
    return {
      balance: wallet.balance,
    };
  }
}
