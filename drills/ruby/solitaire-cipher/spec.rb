describe "Solitaire Cipher" do
  it "encrypts a message successfully" do
    encrypt("CLEPK HHNIY CFPWH FDFEH").should eq("YOURC IPHER ISWOR KINGX")
  end
  it "decrypts a message successfully" do
    decrypt("ABVAW LWZSY OORYK DUPVH").should eq("WELCO METOR UBYQU IZXXX")
  end
end
