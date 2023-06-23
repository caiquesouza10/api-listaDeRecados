import { Response } from "express";

export class HttpResponse {
    public static success(res: Response, message: string, data: any) {
        return res.status(200).send({
            ok: true,
            message,
            data,
        });
    }

    public static created(res: Response, message: string, data: any) {
        return res.status(201).send({
            ok: true,
            message,
            data,
        });
    }

    public static fieldNotProvided(res: Response, field: string) {
        return res.status(400).send({
            ok: false,
            message: field + " was not provided.",
        });
    }

    public static notFound(res: Response, entity: string) {
        return res.status(404).send({
            ok: false,
            message: entity + " not found.",
        });
    }

    public static existe(res: Response, entity: string) {
        return res.status(400).send({
            ok: false,
            message: entity + " Já existe favor criar outro",
        });
    }

    public static invalid(res: Response, field: string) {
        return res.status(400).send({
            ok: false,
            message: field + " is invalid.",
        });
    }

    public static invalidCredentials(res: Response) {
        return res.status(401).send({
            ok: false,
            message: "Acesso não autorizado",
        });
    }

    public static genericError(res: Response, error: any) {
        return res.status(500).send({
            ok: false,
            message: error.toString(),
        });
    }
}
