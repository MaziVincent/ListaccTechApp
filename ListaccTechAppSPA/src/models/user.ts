

type user = {

    id:number,
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    gender:string,
    status:boolean,
    role?:string

}

export type student =  user  & {

    dateOfBirth:string
}

export default user;
