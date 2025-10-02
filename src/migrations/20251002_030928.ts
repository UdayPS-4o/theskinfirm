import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_hero_order_idx\` ON \`services_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_hero_parent_id_idx\` ON \`services_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_hero_path_idx\` ON \`services_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_hero_image_idx\` ON \`services_blocks_hero\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_info\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_info_order_idx\` ON \`services_blocks_info\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_info_parent_id_idx\` ON \`services_blocks_info\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_info_path_idx\` ON \`services_blocks_info\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_about\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_about_order_idx\` ON \`services_blocks_about\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_about_parent_id_idx\` ON \`services_blocks_about\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_about_path_idx\` ON \`services_blocks_about\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_about_image_idx\` ON \`services_blocks_about\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_bullet_points_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_bullet_points\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_points_items_order_idx\` ON \`services_blocks_bullet_points_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_points_items_parent_id_idx\` ON \`services_blocks_bullet_points_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_bullet_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_points_order_idx\` ON \`services_blocks_bullet_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_points_parent_id_idx\` ON \`services_blocks_bullet_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_bullet_points_path_idx\` ON \`services_blocks_bullet_points\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_process_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_process\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_process_items_order_idx\` ON \`services_blocks_process_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_process_items_parent_id_idx\` ON \`services_blocks_process_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_process\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_process_order_idx\` ON \`services_blocks_process\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_process_parent_id_idx\` ON \`services_blocks_process\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_process_path_idx\` ON \`services_blocks_process\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_treatments_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_treatments\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_treatments_items_order_idx\` ON \`services_blocks_treatments_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_treatments_items_parent_id_idx\` ON \`services_blocks_treatments_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_treatments\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_treatments_order_idx\` ON \`services_blocks_treatments\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_treatments_parent_id_idx\` ON \`services_blocks_treatments\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_treatments_path_idx\` ON \`services_blocks_treatments\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_benifits_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_benifits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_benifits_items_order_idx\` ON \`services_blocks_benifits_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_benifits_items_parent_id_idx\` ON \`services_blocks_benifits_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_benifits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_benifits_order_idx\` ON \`services_blocks_benifits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_benifits_parent_id_idx\` ON \`services_blocks_benifits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_benifits_path_idx\` ON \`services_blocks_benifits\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_post_care_downtime\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_post_care\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_downtime_order_idx\` ON \`services_blocks_post_care_downtime\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_downtime_parent_id_idx\` ON \`services_blocks_post_care_downtime\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_post_care_post_care_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_post_care\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_post_care_items_order_idx\` ON \`services_blocks_post_care_post_care_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_post_care_items_parent_id_idx\` ON \`services_blocks_post_care_post_care_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_post_care\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`downtime_title\` text NOT NULL,
  	\`post_care_title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_order_idx\` ON \`services_blocks_post_care\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_parent_id_idx\` ON \`services_blocks_post_care\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_post_care_path_idx\` ON \`services_blocks_post_care\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_testimonials_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_testimonials_items_order_idx\` ON \`services_blocks_testimonials_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_testimonials_items_parent_id_idx\` ON \`services_blocks_testimonials_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_testimonials_order_idx\` ON \`services_blocks_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_testimonials_parent_id_idx\` ON \`services_blocks_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_testimonials_path_idx\` ON \`services_blocks_testimonials\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_eligibility_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_eligibility\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_eligibility_items_order_idx\` ON \`services_blocks_eligibility_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_eligibility_items_parent_id_idx\` ON \`services_blocks_eligibility_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_eligibility\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_eligibility_order_idx\` ON \`services_blocks_eligibility\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_eligibility_parent_id_idx\` ON \`services_blocks_eligibility\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_eligibility_path_idx\` ON \`services_blocks_eligibility\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_faq_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_faq_items_order_idx\` ON \`services_blocks_faq_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_faq_items_parent_id_idx\` ON \`services_blocks_faq_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`services_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`services_blocks_faq_order_idx\` ON \`services_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_faq_parent_id_idx\` ON \`services_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`services_blocks_faq_path_idx\` ON \`services_blocks_faq\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`services\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`category_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`category_id\`) REFERENCES \`service_categories\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`services_slug_idx\` ON \`services\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`services_category_idx\` ON \`services\` (\`category_id\`);`)
  await db.run(sql`CREATE INDEX \`services_updated_at_idx\` ON \`services\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`services_created_at_idx\` ON \`services\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`service_categories\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`type\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`service_categories_updated_at_idx\` ON \`service_categories\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`service_categories_created_at_idx\` ON \`service_categories\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`services_id\` integer,
  	\`service_categories_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`services_id\`) REFERENCES \`services\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`service_categories_id\`) REFERENCES \`service_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_services_id_idx\` ON \`payload_locked_documents_rels\` (\`services_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_service_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`service_categories_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_info\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_about\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_bullet_points_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_bullet_points\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_process_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_process\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_treatments_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_treatments\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_benifits_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_benifits\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_post_care_downtime\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_post_care_post_care_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_post_care\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_testimonials_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_testimonials\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_eligibility_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_eligibility\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_faq_items\`;`)
  await db.run(sql`DROP TABLE \`services_blocks_faq\`;`)
  await db.run(sql`DROP TABLE \`services\`;`)
  await db.run(sql`DROP TABLE \`service_categories\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
