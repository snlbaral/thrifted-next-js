import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "882234483028-jlmdem97hhcgjuat499bcg9a8tv23o03.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "960452744964253",
      clientSecret: "99373c3fd4dbddaa949ec88b9ca43c2a",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found.");
        }
        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) {
          throw new Error("Email or Password does not match.");
        }
        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
