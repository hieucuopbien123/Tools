<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_wordpress' );

/** Database username */
define( 'DB_USER', 'testuser' );

/** Database password */
define( 'DB_PASSWORD', 'pass' );

/** Database hostname */
define( 'DB_HOST', 'c-mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '</c5i[9(k,rWKG !(.S8@skv60^AZEWP4!wwjq(vuF%u`u/NGGd&gO5L,!{V1qzk' );
define( 'SECURE_AUTH_KEY',  'b?|eckQR)!HarCwhPZL>?7W4J:qboB(vP`C1s~uww5i% v/wo#w^x/st6f&1Upy}' );
define( 'LOGGED_IN_KEY',    'jIE=%#+<<GQwgK@/+^:R^Y#2]!AV/]gOQ4]Fc&pvROW^T~/cRn*cSXQTDY)pJSs.' );
define( 'NONCE_KEY',        'J1]idZ)f2VZ!@i1L%RWOY@lCcg+Oa](!5q(:hL?Aq|2E~EBMNTm6t6N(fH{R}=s6' );
define( 'AUTH_SALT',        'U0Kc<[3y?1GPkr(IF!_8}|u4G]UFX,VX}lpDRj%&a:z:uRWyj(r-L8z!)xA`@AN:' );
define( 'SECURE_AUTH_SALT', 'Gtc=MT3xybt8C.1H(!mFE.Nlh%)za=8}2!xTka,GusVeCVAS)CY@6ZywjbHJX5v8' );
define( 'LOGGED_IN_SALT',   'PsID8K>Ml^uM6i[FdX@5 B+}fQ73&7^;e@<[6Nf3W7lGFU-G6Ps(tx4!LB3/^SV;' );
define( 'NONCE_SALT',       'I{c19kwHWAe4XFY2_&ks|J|=PI)#n4<4w9C=bR_}s-qTZ}Vz,Bls=*BU6VGFin4!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
