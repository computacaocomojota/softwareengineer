import { randomUUID } from 'crypto';
import { CreateCustomerDTO } from './dto/CreateCustom.dto';
import { UpdateCustomerDTO } from './dto/UpdatedCustom.dto';

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export class CustomerService {
  private customers: Customer[] = [];
  
  create(data: CreateCustomerDTO): Customer {
    
    const newCustomer: Customer = {
      id: randomUUID(),
      ...data,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  findById(id: string): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }

  findAll(): Customer[] {
    return this.customers;
  }

  update(id: string, data: UpdateCustomerDTO): Customer | undefined {
    
    const index = this.customers.findIndex((customer) => customer.id === id);
    
    if (index === -1) {
      return undefined;
    }

    this.customers[index] = {
      ...this.customers[index],
      ...data,
    };

    return this.customers[index];
  }

  delete(id: string): boolean {
    
    const index = this.customers.findIndex((customer) => customer.id === id);
    
    if (index === -1) {
      return false;
    }

    this.customers.splice(index, 1);
    return true;
  }
}
