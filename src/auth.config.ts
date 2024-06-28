import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./lib/schemas/loginSchema";
import { compare } from "bcryptjs";
import { getUserByEmail } from "./app/actions/authActions";
 
export default { 
    providers: [CredentialsProvider({
        name: 'credentials',
        async authorize(creds) {
            const validated = loginSchema.safeParse(creds);

            if (validated.success) {
                const {email, password} = validated.data;

                const user = await getUserByEmail(email);

                if (!user || !(await compare(password, user.passwordHash))) {
                    console.log('wrong password')
                    return null;
                }
                console.log('logged in')
                return user;
            }

            return null;
        }
    })] 
} satisfies NextAuthConfig