import { CustomerService } from "./customer.service";
import { CreateCustomerDTO } from "./dto/CreateCustom.dto";
import { UpdateCustomerDTO } from "./dto/UpdatedCustom.dto";

const customerService = new CustomerService();

const customer: CreateCustomerDTO = {
  name: "João Vitor Guimarães",
  email: "jvgsantos.cic@uesc.br",
};

console.log("Cliente:", customer);

console.log("Clientes:", customerService.findAll());

const createdCustomer = customerService.create(customer);

console.log("Cliente criado: ", createdCustomer);

console.log("Cliente encontrado por id: ", customerService.findById(createdCustomer.id));

const updateCustomer: UpdateCustomerDTO = {
  email: "alofreitas.cic@uesc.br",
};

const updatedCustomer = customerService.update(
  createdCustomer.id,
  updateCustomer
);

console.log("Cliente atualizado: ", updatedCustomer);

const deletedCustomer = customerService.delete(createdCustomer.id);

console.log("Cliente deletado: ", deletedCustomer);

console.log(customerService.findAll());
