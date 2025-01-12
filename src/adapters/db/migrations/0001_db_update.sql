DROP INDEX `account_category_category_name_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `account_category_category_name_user_id_unique` ON `account_category` (`category_name`,`user_id`);--> statement-breakpoint
DROP INDEX `transaction_category_category_name_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `transaction_category_user_id_category_name_unique` ON `transaction_category` (`user_id`,`category_name`);