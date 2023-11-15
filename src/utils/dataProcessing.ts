export function processScreenData(key: string, dataType: string, data: any) {

    console.log(dataType)

    if (dataType === "program") {
        switch (key) {
            case "name":
                return data.title;
            case "email":
                return data.institutionEmail;
            case "cnpj":
                return data.institutionCnpj;
            case "type":
                return data.programType;
            case "description":
                return data.description;
            case "dateEnrollmentStart":
                return new Date(data.enrollmentInitialDate).toLocaleDateString();
            case "dateEnrollmentEnd":
                return new Date(data.enrollmentEndDate).toLocaleDateString();
            case "dateProgramStart":
                return new Date(data.programInitialDate).toLocaleDateString();
            case "dateProgramEnd":
                return new Date(data.programEndDate).toLocaleDateString();
            case "location":
                return data.location;
            case "language":
                return data.language;
            default:
                return "error";
        }
    }
    if (dataType === "institution") {
        switch (key) {
            case "name":
                return data.institutionName;
            case "email":
                return data.email;
            case "cnpj":
                return data.cnpj;
            case "educationalScope":
                return data.educationalScope;
            default:
                return "error";
        }
    }

}