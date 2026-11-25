# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/toirant/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/toirant/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) bounty on [make.fun](https://make.fun).

## The entry

The program writes one micro-confession to `/output/entry.txt` — a `To:` line naming who it was meant for, and the unsent line itself, written exactly as it was typed, with no explanation after it:

> To: my grandma, who taught me to stir jollof with a wooden spoon
> I finally got the smoky taste right, and I never got to cook it for you once.

142 characters, two lines. The reason it stayed in drafts is felt in the words, never stated: it is too late. The wooden spoon she taught with is the detail that ties the addressee to the line — swap her for anyone else and the confession breaks.

## How it works

`main.ts` (Node 22, no dependencies) holds the confession as fixed text and writes it to `/output/entry.txt`, validating the gate first: 1–260 characters, not only white space, the message line at most 200 characters, exactly two lines starting with a `To:` line. It never deletes the output directory and reads nothing from the network, git history, or any file outside this repo.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
