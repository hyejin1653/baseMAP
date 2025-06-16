import { Client } from '@stomp/stompjs';
import {useDeckFeatureStore} from "@/stores/deckStore.js";

export const signalStompClient = new Client({
    brokerURL: "ws://127.0.0.1:9090/ws",
    reconnectDelay: 10000,
    connectionTimeout: 5000,
    onStompError: e => {
        console.error('stompClient ERROR', e);
    },
});
