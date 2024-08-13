import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex border-2 px-5">
      <div className="mx-auto flex h-screen w-full max-w-6xl justify-between border-2">
        <div className="w-[50%] p-5">
          <div>
            <Image src="" alt="logo" />
            <p>Dashboard</p>
          </div>
        </div>

        <div className="w-[50%] p-5">
          <form className="flex flex-col items-center">
            <h2>Добро пожаловать</h2>
            <p>Введите свою почту и пароль что бы продолжить</p>

            <Input type="email" placeholder="example@mail.com" />
            <Button className="w-full">Войти</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
