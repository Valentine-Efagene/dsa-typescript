const abbreviation = require('./index').default

test("'daBcd', 'ABC'", () => {
  expect(abbreviation('daBcd', 'ABC')).toBe('YES')
});

test("'beFgH', 'EFG'", () => {
  expect(abbreviation('beFgH', 'EFG')).toBe('NO')
});


// Bought

test("'beFgH', 'EFG'", () => {
  expect(abbreviation('RDWPJPAMKGRIWAPBZSYWALDBLDOFLWIQPMPLEMCJXKAENTLVYMSJNRJAQQPWAGVcGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDDOFCYWBUCJGbvqlddfazmmohcewjg', 'RDPJPAMKGRIWAPBZSYWALDBLOFWIQPMPLEMCJXKAENTLVYMJNRJAQQPWAGVGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDOFCYWBUCJG')).toBe('NO')
})

test("'beFgH', 'EFG'", () => {
  expect(abbreviation('MBQEVZPBjcbswirgrmkkfvfvcpiukuxlnxkkenqp', 'MBQEVZP')).toBe('NO')
})

test("'beFgH', 'EFG'", () => {
  expect(abbreviation('DINVMKSOfsVQByBnCWNKPRFRKMhFRSkNQRBVNTIKNBXRSXdADOSeNDcLWFCERZOLQjEZCEPKXPCYKCVKALNxBADQBFDQUpdqunpelxauyyrwtjpkwoxlrrqbjtxlkvkcajhpqhqeitafcsjxwtttzyhzvh', 'DINVMKSOVQBBCWNKPRFRKMFRSNQRBVNTIKNBXRSXADOSNDLWFCERZOLQEZCEPKXPCYKCVKALNBADQBFDQU')).toBe('YES')
})

test("'', ''", () => {
  expect(abbreviation('BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms', 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF')).toBe('YES')
})

test("'beFgH', 'EFG'", () => {
  expect(abbreviation('AQIUQVIPJDKYNEBPXFGVHCMFGvURORPRSTYQYJZCYJDNFRPRYTMZIsNDOJAOAGAEFRCDKUJBhdkedalbwoxxnoyowoxpdlelovibyiwat', 'AQIUQVIPJDKYNEBPXFGVHCMFGURORPRSTYQYJZCYJDNFRPRYTMZINDOJAOAGAEFRCDKUJB')).toBe('YES')
})

// test("'beFgH', 'EFG'", () => {
//   expect(abbreviation('', '')).toBe('NO')
// })

// test("'beFgH', 'EFG'", () => {
//   expect(abbreviation('', '')).toBe('YES')
// })

// test("'beFgH', 'EFG'", () => {
//   expect(abbreviation('', '')).toBe('NO')
// })

// test("'beFgH', 'EFG'", () => {
//   expect(abbreviation('', '')).toBe('YES')
// })

// test("'beFgH', 'EFG'", () => {
//   expect(abbreviation('', '')).toBe('YES')
// })