import { Avatar, AvatarFallback, Box, Button } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("user");
  return (
    <>
      <Button
        colorScheme="red"
        size="lg"
        variant="outline"
        onClick={() => {
          
        }}
      >
        Chack balance
      </Button>
    </>
  );
};

export default Profile;
