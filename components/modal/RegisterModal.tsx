'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";


function RegisterModal() {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post("/api/register", data).then(() => {
            registerModal.onClose()
        }).catch((error) => {
            toast.error(error.message)
            console.log(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const bodyContent: React.ReactElement = (
        <div className="flex flex-col gap-2">
            <Heading title="Welcome to Airbnb" subtitle="" />
            <Input
                id="email" label="Email" disabled={isLoading} register={register} errors={errors} required
            />
            <Input
                id="name" label="Name" disabled={isLoading} register={register} errors={errors} required
            />
            <Input
                id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required
            />
        </div>
    )

    const footerContent: React.ReactElement = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => { }}
            />
            <div className="text-neutral-500 text-center justify-center mt-4 font-light">
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div className="">Already have an account?</div>
                    <div onClick={registerModal.onClose} className="text-bold text-neutral-800 hover:underline hover:cursor-pointer">Log in</div>
                </div>
            </div>
        </div>
    )



    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Log in or sign up"
            actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)}
            body={bodyContent} footer={footerContent}
        />
    )
}

export default RegisterModal

