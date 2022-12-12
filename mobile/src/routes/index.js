import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicio } from "../screens/Inicio";
import { ListaProduto } from "../screens/ListaProduto";
import { Produto } from "../screens/Produto";
import { CadastroUsuario } from "../screens/CadastroUsuario";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    return(
        <Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
            <Screen 
                name="Inicio"
                component={Inicio}
            />
            <Screen 
                name="ListaProduto"
                component={ListaProduto}
            />
            <Screen 
                name="Produto"
                component={Produto}
            />
            <Screen 
                name="CadastroUsuario"
                component={CadastroUsuario}
            />
        </Navigator>
    );
}