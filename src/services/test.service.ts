class TestService {
    constructor() {
        // inject here
    }

    async pingCheck(): Promise<string> {
        return 'pong';
    }
}

export default TestService;