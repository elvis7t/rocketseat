import { UploadParams, Uploader } from "@/domain/forum/application/storage/uploader";
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class LocalUploader implements Uploader {
    async upload({ fileName }: UploadParams): Promise<{ url: string }> {
        const uniqueName = `${randomUUID()}-${fileName}`;

        return {
            url: `http://localhost:3333/uploads/${uniqueName}`,
        };
    }
}
