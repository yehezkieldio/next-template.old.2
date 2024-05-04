import { SignIn } from "@/app/_components/signin-button";
import { SignOut } from "@/app/_components/signout-button";
import { auth } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
    const session = await auth();
    const test = await api.test.public();

    console.log(session);

    if (!session?.user) {
        return (
            <div>
                <SignIn />
            </div>
        );
    }

    console.log(test);

    return (
        <div>
            <div>
                <h1>{session?.user?.name}</h1>
            </div>
            <SignOut />
        </div>
    );
}
