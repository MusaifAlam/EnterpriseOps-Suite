package com.tka.OrganizationWrokflow.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tka.OrganizationWrokflow.entity.Country;
import com.tka.OrganizationWrokflow.entity.Employee;

@Repository
public class MainDAO {
	
	@Autowired
	SessionFactory factory;

	public String addCountry(Country c) {
		Session session=null;
		Transaction tx=null;
		String msg=null;
		
		try {	
		session=factory.openSession();
		tx=session.beginTransaction();
		session.persist(c);		
		tx.commit();
		
		msg="Coutry Addedd Successfully..";
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
			
		}		
		return msg;
	}

	public String updateCountry(Country c, int id) {
		
		Session session=null;
		Transaction tx=null;
		String msg=null;
		Country country=null;
		try {	
		session=factory.openSession();
		tx=session.beginTransaction();
		country=session.get(Country.class, id);
		country.setCname(c.getCname());
		session.merge(country);		
		
		tx.commit();
		msg="Coutry Updated Successfully..";
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		return msg;
	}

	public String deleteCountry(int id) {
		
		Session session=null;
		Transaction tx=null;
		String msg=null;
		Country country=null;
		try {	
		session=factory.openSession();
		tx=session.beginTransaction();
		country=session.get(Country.class, id);
		
		session.remove(country);		
		tx.commit();
		msg="Coutry Deleted Successfully..";
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		return msg;
	}

	public List<Country> getAllCountry() {
		Session session=null;
		Transaction tx=null;
		List<Country> list=null;
		String hqlQuery="from Country";
		try {	
			session=factory.openSession();
			tx=session.beginTransaction();
			Query<Country> query=session.createQuery(hqlQuery,Country.class);
			list=query.list();
			tx.commit();
			
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		
		return list;
	}

	public Country getParticularCountryById(int id) {
		Session session=null;
		Transaction tx=null;
		
		Country country=null;
		try {	
		session=factory.openSession();
		tx=session.beginTransaction();
		country=session.get(Country.class, id);
		tx.commit();
		
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		return country;
	}

	public String addEmployee(Employee emp) {
		
		Session session=null;
		Transaction tx=null;
		String msg=null;
		try {	
		session=factory.openSession();
		tx=session.beginTransaction();
		session.persist(emp);		
		tx.commit();
		msg="Employee Addedd Successfully..";
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		return msg;
	}

	public Employee login(Employee emp) {
		Session session=null;
		Transaction tx=null;
		Employee employee=null;
		String hqlQuery="from Employee where emailid=:emailid and mobileno=:mobileno";
		try {	
			session=factory.openSession();
			tx=session.beginTransaction();
			
			Query<Employee> query= session.createQuery(hqlQuery,Employee.class);
			query.setParameter("emailid", emp.getEmailid());
			query.setParameter("mobileno", emp.getMobileno());
			employee= query.uniqueResult();
			tx.commit();
			
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		return employee;
	}

	public List<Employee> salaryRange(double startSal, double endSal) {
		Session session=null;
		Transaction tx=null;
		List<Employee> list=null;
		String hqlQuery="from Employee where salary between :startSal and :endSal";
		try {	
			session=factory.openSession();
			tx=session.beginTransaction();
			Query<Employee> query=session.createQuery(hqlQuery,Employee.class);
			query.setParameter("startSal", startSal);
			query.setParameter("endSal", endSal);
			list=query.list();
			tx.commit();
			
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}		
		
		return list;
	}

	public List<Employee> getAllEmployee() {
		Session session=null;
		Transaction tx=null;
		List<Employee> list=null;
		String hqlQuery="from Employee";
		
		try {
			session=factory.openSession();
			tx=session.beginTransaction();
			Query<Employee> query=session.createQuery(hqlQuery,Employee.class);
			list= query.list();
			tx.commit();
			
		} catch (Exception e) {
			if(tx!=null) {
				tx.rollback();				
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return list;
	}
	
	public String updateEmployee(int id, Employee emp) {
		Session session = null;
		Transaction tx = null;
		String msg = null;
		try {
			session = factory.openSession();
			tx = session.beginTransaction();

			Employee employee = session.get(Employee.class, id);
			employee.setName(emp.getName());
			employee.setMobileno(emp.getMobileno());
			employee.setEmailid(emp.getEmailid());
			employee.setSalary(emp.getSalary());
			employee.setStatus(emp.getStatus());
			employee.setDepartment(emp.getDepartment());
			employee.setCreatedBy(emp.getCreatedBy());
			employee.setCreatedDate(emp.getCreatedDate());
			employee.setUpdatedBy(emp.getUpdatedBy());
			employee.setUpdatedDate(emp.getUpdatedDate());
			employee.setCountry(emp.getCountry());
			session.merge(employee);
			tx.commit();
			msg = "Employee Record is Updatated....";

		} catch (Exception e) {
			// TODO: handle exception
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}

		return msg;

	}
	
	
	public Employee getParticularById(int id) {
		Session session = null;
		Transaction tx = null;
		Employee emp = null;
		try {

			session = factory.openSession();
			tx = session.beginTransaction();
			emp = session.get(Employee.class, id);
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();

		} finally {

			if (session != null) {
				session.close();
			}

		}
		return emp;

	}

	public String deleteEmployee(int id) {

		Session session = null;
		Transaction tx = null;
		String msg = null;

		try {

			session = factory.openSession();
			tx = session.beginTransaction();

			Employee emp = session.get(Employee.class, id);
			session.remove(emp);
			tx.commit();
			msg = "Employee is Deleted...";

		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();

		} finally {

			if (session != null) {
				session.close();
			}

		}
		return msg;
	}

	

}
