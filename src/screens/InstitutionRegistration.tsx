import { Button } from "@components/Button";
import { VStack, Input, Text, HStack, Center, Divider, Select, CheckIcon } from "native-base";

export function InstitutionRegistration() {


    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
            <Input variant="underlined" placeholder="Nome da instituição" isRequired />
            <Input variant="underlined" placeholder="CNPJ" isRequired />
            <Select  minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1}>
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Input variant="underlined" placeholder="CPF do cadastrante" isRequired />
            <Input variant="underlined" placeholder="Função do cadastrante" isRequired />
            <Button title="Cadastrar"/>
        </VStack>
    );
}