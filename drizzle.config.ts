import type { Config } from 'drizzle-kit';

export default {
	schema: './adapters/db/schema/index.ts',
	out: './adapters/db/migrations',
  dialect: 'sqlite',
	driver: 'expo',
} satisfies Config;
