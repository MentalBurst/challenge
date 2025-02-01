import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

export type Role = 'userA'
    | 'userB';

export interface UserCredentials {
    email: string;
    password: string;
}

/**
 * Get user credentials based on the role.
 * @param role
 */
export function getUserCredentials(role: any): UserCredentials {
    try {
        const filePath = path.resolve(__dirname, '../config_users.yaml');
        const config = yaml.load(fs.readFileSync(filePath, 'utf8')) as any;

        if (!config || !config.users) {
            throw new Error('Config file is empty or malformed. Ensure it contains a "users" object.');
        }

        const roleMap: {
            userA?: UserCredentials;
            userB?: UserCredentials;
        } = {
            userA: config.users.userA,
            userB: config.users.userB
        };

        // @ts-ignore
        const userCredentials = roleMap[role];

        if (!userCredentials) {
            throw new Error(`No credentials found for the role: ${role}`);
        }

        const { email, password } = userCredentials;
        if (!email || !password) {
            throw new Error(`Invalid credentials format for the role: ${role}`);
        }

        return { email, password };

    } catch (error) {
        console.error('Error loading user credentials config file:', error);

        // re-throw to stop execution
        throw error;
    }
}
