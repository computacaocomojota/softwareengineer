import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let customerService: CustomerService;

  beforeEach(() => {
    customerService = new CustomerService();
  });

  describe('create', () => {
    it('Deve criar um cliente e retornar o cliente com um ID gerado', () => {
      const customer = customerService.create({ name: 'John Doe', email: 'john@example.com' });
      expect(customer).toHaveProperty('id');
      expect(customer.name).toBe('John Doe');
      expect(customer.email).toBe('john@example.com');
    });
  });

  describe('findById', () => {
    it('Deve retornar um cliente existente pelo ID informado', () => {
      const created = customerService.create({ name: 'Jane Doe', email: 'jane@example.com' });
      const found = customerService.findById(created.id);
      expect(found).toEqual(created);
    });

    it('Deve retornar undefined se o cliente não for encontrado', () => {
      const found = customerService.findById('non-existent-id');
      expect(found).toBeUndefined();
    });
  });

  describe('findAll', () => {
    it('Deve retornar todos os clientes cadastrados', () => {
      customerService.create({ name: 'Alice', email: 'alice@example.com' });
      customerService.create({ name: 'Bob', email: 'bob@example.com' });
      const allCustomers = customerService.findAll();
      expect(allCustomers.length).toBe(2);
    });
  });

  describe('update', () => {
    it('Deve atualizar um cliente existente', () => {
      const created = customerService.create({ name: 'Charlie', email: 'charlie@example.com' });
      const updated = customerService.update(created.id, { name: 'Charlie Updated' });
      
      expect(updated).toBeDefined();
      expect(updated?.name).toBe('Charlie Updated');
      expect(updated?.email).toBe('charlie@example.com'); // email remains unchanged
    });

    it('Deve retornar undefined se o cliente não for encontrado', () => {
      const updated = customerService.update('non-existent-id', { name: 'Ghost' });
      expect(updated).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('Deve deletar um cliente existente', () => {
      const created = customerService.create({ name: 'Dave', email: 'dave@example.com' });
      const deleted = customerService.delete(created.id);
      
      expect(deleted).toBe(true);
      expect(customerService.findById(created.id)).toBeUndefined();
    });

    it('Deve retornar false se o cliente não for encontrado', () => {
      const deleted = customerService.delete('non-existent-id');
      expect(deleted).toBe(false);
    });
  });
});
