import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface EnrollmentRequest {
    name: string;
    email: string;
    courseInterest: string;
    message?: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllEnrollmentRequests(): Promise<Array<EnrollmentRequest>>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
    submitEnrollmentRequest(name: string, email: string, phone: string, courseInterest: string, message: string | null): Promise<void>;
}
