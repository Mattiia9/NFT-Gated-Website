export default async function checkBalance(sdk,address){
    const accessToExclusiveContent = sdk.getAccesToExclusiveContent(
        "0x495f947276749Ce646f68AC8c248420045cb7b5e" //NFT Adresse
    );

    const check = await accessToExclusiveContent.balanceof(address, 0);

    return balance.gt(0);


}