import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '7909dc3d3a7549c4bf75c73b535906bb'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '7c6baa866d3e4f9abad8eab6501f70a6'
                    }
                }
            }
        }
    }
}
