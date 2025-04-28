![Image](https://github.com/user-attachments/assets/58009229-9b5a-45a9-b35b-d3a3dcc16195)

O aiqfome está testando uma nova funcionalidade que permitirá aos usuários salvarem produtos como "favoritos". A proposta é facilitar o acesso aos itens mais consumidos, otimizando a navegação e incentivando novos pedidos.

[Figma](https://www.figma.com/design/evd0lwjgLCL8sO1zXJgUtB/Desafio-Magalu?node-id=18-4&t=ur1zyIY9H0HRN5sE-1)

### Como roda o projeto

Primeiramente tenha o ambiente do [react-native](https://reactnative.dev/docs/environment-setup) intalado em sua maquina.

Tenha a versão do **Java**

```javascript
openjdk 17.0.13 2024-10-15 LTS
```

Tenha o **Node** na versão

```javascript
v23.3.0
```

Tenha o **Yarn** na versão

```javascript
1.22.22
```

Após as verificações acima, com projeto aberto na sua IDE de preferência, rode o comando abaixo, isso instalara todas depências do projeto necessarias.

```javascript
yarn
```

É preciso criar um arquivo na raiz do projeto chamado .env com seguinte conteúdo dentro 
```javascript
EXPO_PUBLIC_BASE_URL = "https://fakestoreapi.com/"
```

Para executar no android 
```javascript
yarn android
```

Para executar no android 
```javascript
yarn ios
```

# Requistos do projeto

### Crie um aplicativo que permita:

-   [x] Listar produtos (título, imagem, preço e review).
-   [x] Marcar/desmarcar produtos como favoritos.
-   [x] Visualizar apenas os itens favoritos.
-   [x] Persistir localmente os dados (via AsyncStorage ou banco local).
-   [x] https://fakestoreapi.com/docs

Listar todos os produtos:
GET https://fakestoreapi.com/products

Buscar produto por ID:
GET https://fakestoreapi.com/products/{id}

### Integrações (Opcional)

-   [x] Firebase (Auth, Firestore ou Analytics).
-   [ ] Push Notifications (via Expo ou FCM).
-   [x] Deep Linking ou Links Dinâmicos.

| Critério                                             | Peso     |
| ---------------------------------------------------- | -------- |
| Funcionalidade completa                              | 🔥🔥🔥🔥 |
| Uso de componentes funcionais                        | 🔥🔥🔥   |
| Boas práticas com hooks e contextos                  | 🔥🔥🔥   |
| Persistência de dados localmente                     | 🔥🔥     |
| Integração com serviços mobile (Firebase, push, etc) | 🔥🔥     |
| Layout e responsividade                              | 🔥🔥     |

## Bibliotecas usadas

| lib                    | Versão  |
| ---------------------- | ------- |
| React navigation       | 6.x     |
| @shopify/flash-list    | ^1.8.0  |
| tanstack/react-query   | ^5.74.4 |
| zustand                | ^5.0.3  |
| axios                  | ^1.9.0  |
| @react-native-firebase | 22      |

## Explique suas escolhas.

A aplicação foi construída usando StyledSheet do próprio react native, todas as telas estão responsivas pelo arquivo metrics.ts, sua navegação foi construída com react Navigation, que faz interseção com o deeplink.
Foi usado FlashList para melhor performance dos itens listados, para requisições, foi utilizado axios e o tanstack react-query em específico ele guarda dados em cache facilitando o carregamento instantâneo do itens em tela.
Foi usado o Zustand para realizar a persistência de dados juntamente com asyncStorage e tendo uma resposta instantânea das mudanças de dados em tela.
E por fim o RNFirebase foi usado para realizar cadastro de novos usuários, login e logout.
Não utilizei notification pois ficou muito vago o que poderia ser feito com ele, que que aplicação não tem muitas telas e nem regras.

## Colo usar deeplink

| link para deeplink do app |                      |
| ------------------------- | -------------------- |
| iOS                       | Android              |
| desafioaiqfome://         | com.italo.aiqfome:// |
| com.italo.aiqfome://      | desafioaiqfome://    |

como executar deeplink em desenvolvimento.

```javascript
npx uri-scheme open com.italo.aiqfome://port --platform
```

direto do terminal

```javascript
npx uri-scheme open com.italo.aiqfome://Details/id --platform
```

### Contato

[💻 Linkedin](https://www.linkedin.com/in/italoasouzati/)

📫 **italoasouzat.i@gmail.com**

By 📱💻❤ **Ítalo Araújo Souza**
