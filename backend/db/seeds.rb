#Product Groups
@group1 = ProductGroup.create name: "Amazing Product Group", weight: 20
@group2 = ProductGroup.create name: "Lackluster Product Group", color: "black"

#Group 1 Products
@product1 = @group1.products.create name: "Incredible!", description: "It really is quite incredible", sales_price: 1.75, purchase_price: 1.25
@product2 = @group1.products.create name: "Specuacular!", description: "It really is quite specuacular", sales_price: 10.75, purchase_price: 1.25
@product3 = @group1.products.create name: "Fantastic!", description: "It really is quite fantastic", sales_price: 0.00, purchase_price: 3.25

#Group 2 Products
@product4 = @group1.products.create name: "Bleh", description: "It really is quite bland", sales_price: 1.75, purchase_price: 1.25
@product5 = @group1.products.create name: "Awkward", description: "It really is quite awkward", sales_price: 10.75, purchase_price: 1.25
@product6 = @group1.products.create name: "Boring", description: "It really is quite boring", sales_price: 0.00, purchase_price: 3.25

#Compositions
def generateChildren(product, arr)
    arr.each do |product, index|
        comp = product.compositions.build qty: 1
        comp.child_product = product
        comp.save
    end
end
@composition1 = [@product4, @product5]
@composition2 = [@product5, @product6]
@composition3 = [@product6, @product4, @product5]
generateChildren(@product1, @composition1)
generateChildren(@product2, @composition2)
generateChildren(@product3, @composition3)

#Batches
@batch1 = @product4.batches.create mfg: Date.today, exp: Date.today + 5
@batch2 = @product5.batches.create mfg: Date.today, exp: Date.today + 12
@batch3 = @product6.batches.create mfg: Date.today, exp: Date.today + 24

@batch4 = @product1.batches.create mfg: Date.today, exp: Date.today + 5
@batch5 = @product2.batches.create mfg: Date.today, exp: Date.today + 12
@batch6 = @product3.batches.create mfg: Date.today, exp: Date.today + 24

def buildIntoBatch(child, parent)
    composition = parent.product.compositions.find {|composition| composition.child_product == child}
    assembly = child.parent_assemblies.build 
    assembly.parent_batch = parent 
    assembly.composition = composition 
    assembly.save 
end

buildIntoBatch @batch1, @batch4
buildIntoBatch @batch2, @batch4
buildIntoBatch @batch2, @batch5
buildIntoBatch @batch3, @batch5
buildIntoBatch @batch1, @batch3
buildIntoBatch @batch2, @batch4
buildIntoBatch @batch3, @batch5

#UidParams
@uid_param = UidParam.create name: "Main Parameter"

#Items
def createItem(batch, param, value, amount = 1)
    item = batch.items.build
    item.uids.build item_value: value, uid_param: param 
    item.represents = amount 
    item.save 
end

def randomCode
    (0...(rand(10))).map { ('a'..'z').to_a[rand(26)] }.join
end

createItem @batch1, @uid_param, randomCode 
createItem @batch1, @uid_param, randomCode 
createItem @batch2, @uid_param, randomCode 
createItem @batch2, @uid_param, randomCode 
createItem @batch3, @uid_param, randomCode 
createItem @batch3, @uid_param, randomCode
createItem @batch4, @uid_param, randomCode 
createItem @batch4, @uid_param, randomCode
createItem @batch5, @uid_param, randomCode 
createItem @batch5, @uid_param, randomCode
createItem @batch6, @uid_param, randomCode 
createItem @batch6, @uid_param, randomCode
