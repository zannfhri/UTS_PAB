import { Heading, Center, Text, Image, Box, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {

    const params = route.params.item;
    return (
        <ScrollView>
            <Header title={""} withBack="true" />
            <Box p={4}>
                <Heading textAlign="left" fontSize="35px" fontWeight="bold">{params.title}</Heading>
                <Text fontSize="20px">{params.date}</Text>
                
                <Text fontSize="md" fontFamily="Roboto" >{params.content}</Text>
            </Box>
        </ScrollView>
    );
};

export default NewsDetail;