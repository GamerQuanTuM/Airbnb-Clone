import { User } from "@prisma/client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface Modal {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

interface Button {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

interface ModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

interface Heading {
    title: string;
    subtitle: string;
    center?: boolean
}

interface Input {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

interface CountrySelectValue {
    flag: string;
    label: string;
    latlng: numbeer[];
    region: string;
    value: string;
}