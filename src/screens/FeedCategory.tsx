import React, { useEffect, useState } from "react";
import {
	VStack,
	FlatList,
	useToast,
	Text,
} from "native-base";

import { AppError } from "@utils/AppError";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Card } from "@components/Card";
import { useNavigation } from "@react-navigation/native";

import { Loading } from "@components/Loading";

import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { ProgramDTO } from "@dtos/ProgramDTO";
import { getProgramByType } from "@services/Feed";

export function FeedCategory() {
	const toast = useToast();
	const navigation = useNavigation<AppNavigatorRoutesProps>();
	const [isLoading, setIsLoading] = useState(true);

	const [programs, setProgram] = useState<ProgramDTO[]>([]);
	const [programType, setProgramType] = "BASIC";

	const { t, i18n } = useTranslation();

	async function fetchPrograns() {
		try {
			setIsLoading(true);

			const response = await getProgramByType(programType);
			setProgram(response.data);
		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel carregar os informativos");

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500",
			});
		} finally {
			setIsLoading(false);
		}
	}

	const programas = [
		{
			name: "Programa de ensino de inglês para imigrantes",
			description:
				" O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
			initialDate: "2021-08-01",
			endDate: "2021-12-01",
			language: "en",
			tags: [
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
			],
			link: " https://www.google.com/ ",
			timeEnrollment: 120,
			institutionId: 1,
			status: "APPROVED",
			timeDuration: 30,
			minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
		},
		{
			name: "Programa de ensino de russo para imigrantes",
			description:
				" O programa de ensino de russo para imigrantes é um programa que visa ensinar russo para imigrantes",
			initialDate: "2021-08-01",
			endDate: "2021-12-01",
			language: "en",
			tags: [
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
			],
			link: " https://www.google.com/ ",
			timeEnrollment: 120,
			institutionId: 1,
			status: "rejected",
			timeDuration: 30,
			minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
		},
		{
			name: "Programa de ensino de francês para imigrantes",
			description:
				" O programa de ensino de francês para imigrantes é um programa que visa ensinar francês para imigrantes",
			initialDate: "2021-08-01",
			endDate: "2021-12-01",
			language: "en",
			tags: [
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
			],
			link: " https://www.google.com/ ",
			timeEnrollment: 120,
			institutionId: 1,
			status: "pending",
			timeDuration: 30,
			minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
		},
		{
			name: "Programa de ensino de espanhol para imigrantes",
			description:
				" O programa de ensino de espanhol para imigrantes é um programa que visa ensinar espanhol para imigrantes",
			initialDate: "2021-08-01",
			endDate: "2021-12-01",
			language: "en",
			tags: [
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
				{ label: "tag1", value: "tag1" },
				{ label: "tag2", value: "tag2" },
				{ label: "tag3", value: "tag3" },
			],
			link: " https://www.google.com/ ",
			timeEnrollment: 120,
			institutionId: 1,
			status: "APPROVED",
			timeDuration: 30,
			minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
		},
	];

	useEffect(() => {
		fetchPrograns();
	}, []);

	return (
		<VStack flex={1} px={6} pb={6} mt={12}>
			<FlatList
				data={programas.slice().sort((a, b) => {
					const statusOrder = { pending: 0, rejected: 1, approved: 2 };
					const statusA = statusOrder[a.status.toLowerCase() as "pending" | "rejected" | "approved"];
					const statusB = statusOrder[b.status.toLowerCase() as "pending" | "rejected" | "approved"];

					return statusA - statusB;
				})}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<Card status={item.status.toLowerCase()} data={item} cardType="program" cardContext="myPrograms" />
				)}
				ListEmptyComponent={() => (
					<VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
						<Text fontFamily="body" fontSize="lg">
							{t("Nao ha programas disponiveis")}
						</Text>
					</VStack>
				)}
				showsVerticalScrollIndicator={false}
				_contentContainerStyle={{ paddingBottom: 10 }}
			/>
		</VStack>
	);
}
