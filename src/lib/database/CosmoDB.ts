import { CosmosClient } from '@azure/cosmos';
import config from '../../config/config';

class CosmoDB {
  client;
  container;

  constructor() {
    const endpoint = config.database.cosmo.endPoint;
    const key = config.database.cosmo.key;
    this.client = new CosmosClient({ endpoint, key });
    this.container = this.client.database(config.database.cosmo.databaseId).container(config.database.cosmo.containerId);
  }

  async insertOne(document) {
    const { resource } = await this.container.items.create(document);
    return resource;
  }

  async insertMany(documents) {
    const { resources } = await this.container.items.create(documents);
    return resources;
  }

  async deleteOne(documentId) {
    const { resource } = await this.container.item(documentId).delete();
    return resource;
  }

  async deleteMany(query) {
    const { resources } = await this.container.items.query(query).fetchAll();
    const deletePromises = resources.map((resource) => this.container.item(resource.id).delete());
    await Promise.all(deletePromises);
    return resources;
  }

  async update(documentId, updatedData) {
    const { resource } = await this.container.item(documentId).replace(updatedData);
    return resource;
  }

  async findOne(query) {
    const { resources } = await this.container.items.query(query).fetchAll();
    return resources[0];
  }

  async findAll(query) {
    const { resources } = await this.container.items.query(query).fetchAll();
    return resources;
  }
}

export default new CosmoDB();
