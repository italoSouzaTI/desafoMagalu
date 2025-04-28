O aiqfome está testando uma nova funcionalidade que permitirá aos usuários salvarem produtos como "favoritos". A proposta é facilitar o acesso aos itens mais consumidos, otimizando a navegação e incentivando novos pedidos.

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
yarn;
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

-   [ ] Firebase (Auth, Firestore ou Analytics).
-   [ ] Push Notifications (via Expo ou FCM).
-   [ ] Deep Linking ou Links Dinâmicos.

| Critério                                             | Peso     |
| ---------------------------------------------------- | -------- |
| Funcionalidade completa                              | 🔥🔥🔥🔥 |
| Uso de componentes funcionais                        | 🔥🔥🔥   |
| Boas práticas com hooks e contextos                  | 🔥🔥🔥   |
| Persistência de dados localmente                     | 🔥🔥     |
| Integração com serviços mobile (Firebase, push, etc) | 🔥🔥     |
| Layout e responsividade                              | 🔥🔥     |

## Bibliotecas usadas

| lib                  | Versão  |
| -------------------- | ------- |
| React navigation     | 6.x     |
| FlashList            | ^1.8.0  |
| tanstack/react-query | ^5.74.4 |
| zustand              | ^5.0.3  |
| axios                | ^1.9.0  |

## Explique suas escolhas.

| link para deeplink do app |                      |
| ------------------------- | -------------------- |
| iOS                       | Android              |
| desafioaiqfome://         | com.italo.aiqfome:// |
| com.italo.aiqfome://      | desafioaiqfome://    |

como executar deeplink no terminal

```javascript
npx uri-scheme open com.italo.aiqfome://port --platform
```
