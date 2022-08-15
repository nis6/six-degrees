import styled from 'styled-components';
import avatar from '../assets/profile.svg';
import { Heading, Button} from '@chakra-ui/react';

const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 13vh;
    padding: 0.5rem;
    &:hover{
        border: solid 1px;
        border-color: #e1dddd;
        border-radius: 1rem;
    }
`;

const Name = styled.div`
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
`;

export default function Profile({name}) {
    return (
        <ProfileContainer>
            <Name>
                <img src={avatar} alt="avatar" />
                <Heading size='s'>Nisha</Heading>
            </Name>
            <Button bg='blackAlpha.900' color='white' border='solid 1px white'  _hover={{ bg: 'blackAlpha.800'}} _active={{ bg: 'blackAlpha.500'}}>Connect</Button>
        </ProfileContainer>
    )
}