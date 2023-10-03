const checkers = {
    pieces: {
      pawn: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      }
    },
    chainedClaim: null,
    tiles: {},
    players: ["white", "black"],
    currentPlayer: "white",
    board: [
      [
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" }
      ],
      [
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" }
      ],
      [
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" }
      ],
      [
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" }
      ]
    ]
  };
  
  const jungle = {
    pieces: {
      rat: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      cat: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      wolf: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      dog: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      leopard: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      tiger: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      lion: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      },
      elephant: {
        sprites: {
          white:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)",
          black:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+)"
        }
      }
    },
    chainedClaim: null,
    tiles: {
      tile: {
        sprites: {
          white: "",
          black: "",
        }
      },
      river: {
        sprites: {
          
        }
      }
    },
    players: ["white", "black"],
    currentPlayer: "white",
    board: [
      [
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" }
      ],
      [
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "black" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" }
      ],
      [
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null },
        { piece: null, type: "tile" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" }
      ],
      [
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null }
      ],
      [
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" },
        { piece: null },
        { piece: "pawn", type: "tile", player: "white" }
      ]
    ]
  };
  
  const Games = {
    checkers
  };
  
  export default Games;
  