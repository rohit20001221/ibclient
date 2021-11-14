import ibkr from "@stoqey/ibkr";
import { env } from "../env";

export async function setup(): Promise<void> {
  try {
    await ibkr({ host: env.IB_HOST, port: env.IB_PORT });
  } catch (error) {
    console.error(error);
  }
}
