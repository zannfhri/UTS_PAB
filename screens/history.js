import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";
const Home = () => {
    const navigation = useNavigation();
    const renderitem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("News Detail", { item: item })}
            >
                <Box
                    p={"4"}
                    borderBottomColor={"coolGray.300"}
                    borderBottomWidth={1}
                    flexDirection="row"
                    flex={1}
                >
                    <Box flex={1.8}>
                        <Heading lineHeight={"md"} fontSize={"md"}>
                            {item.title}
                        </Heading>
                        <Text fontSize={"sm"}>{item.date}</Text>
                    </Box>
                </Box>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <Header title={""} />
            <Box py={"5"} bg="white">
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text fontSize={"20px"} fontWeight={600}>Sunday  Monday  Tuesday  Wednesday  Thursday  Friday  Saturday	</Text>
                </ScrollView>
            </Box>
            <FlatList
                data={datas}
                renderItem={renderitem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
};
export default Home;