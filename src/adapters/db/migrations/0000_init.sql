CREATE TABLE `account_category` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`category_name` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_category_category_name_unique` ON `account_category` (`category_name`);--> statement-breakpoint
CREATE TABLE `account` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`account_name` text NOT NULL,
	`balance` integer NOT NULL,
	`category_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_id`) REFERENCES `account_category`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_user_id_account_name_unique` ON `account` (`user_id`,`account_name`);--> statement-breakpoint
CREATE TABLE `transaction_category` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`category_name` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transaction_category_category_name_unique` ON `transaction_category` (`category_name`);--> statement-breakpoint
CREATE TABLE `transaction_type` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transaction_type_category_name_unique` ON `transaction_type` (`category_name`);--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`account_id` integer,
	`target_account_id` integer,
	`transaction_type_id` integer,
	`transaction_category_id` integer,
	`amount` integer NOT NULL,
	`transaction_date` text NOT NULL,
	`description` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`target_account_id`) REFERENCES `account`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`transaction_type_id`) REFERENCES `transaction_type`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`transaction_category_id`) REFERENCES `transaction_category`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transactions_user_id_account_id_transaction_date_unique` ON `transactions` (`user_id`,`account_id`,`transaction_date`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_name` text NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);