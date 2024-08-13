import { LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <section className="flex px-5">
      <div className="mx-auto flex h-screen w-full max-w-6xl justify-between border-2">
        <div className="hidden flex-1 bg-black p-5 md:flex">
          <div className="text-white">
            <LayoutDashboard width={30} />
            <p>Dashboard</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center p-10">
          <form className="flex w-full flex-col items-center gap-5">
            <div className="text-center">
              <h2 className="mb-2 text-3xl font-semibold tracking-tight">
                Добро пожаловать
              </h2>
              <p>Введите свою почту и пароль что бы продолжить</p>
            </div>

            <Input type="email" placeholder="example@mail.com" />
            <Input type="password" placeholder="Пароль" />
            <Button className="w-full">Войти</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
