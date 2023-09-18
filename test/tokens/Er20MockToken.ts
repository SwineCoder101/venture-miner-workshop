import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";


    describe("Er20MockToken", function () {

        async function deployEr20MockTokenFixture() {

            const [owner, otherAccount] = await ethers.getSigners();
            const Er20MockToken = await ethers.getContractFactory("Er20MockToken");
            const er20MockToken = await Er20MockToken.deploy();
            return { er20MockToken, owner, otherAccount };
        }
        it("Should set the right owner", async function () {
            const { er20MockToken, owner } = await deployEr20MockTokenFixture();
            expect(await er20MockToken.owner()).to.equal(owner.address);
        });
    });

