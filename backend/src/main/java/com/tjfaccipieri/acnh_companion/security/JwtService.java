package com.tjfaccipieri.acnh_companion.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JwtService {
  public static final String SECRET = "b3768f30609653634a8f882f18f3e19f7c2059f7b95537194385612281d47101";
  
  private Key getSignKey() {
    byte[] keyBytes = Decoders.BASE64.decode(SECRET);
    return Keys.hmacShaKeyFor(keyBytes);
  }
  
  private Claims extractAllClaims(String token) {
    return Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
  }
  
  public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }
  
  public String extractUsername(String token) {
    return extractClaim(token, Claims::getSubject);
  }
  
  public Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }
  
  private Boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }
  
  public Boolean validateToken(String token, UserDetails userDetails) {
    final String username = extractUsername(token);
    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
  }
  
  // Todo: Refatorar isso para fazer com Refresh Token de 1 semana, com token de 1 hora
  private String createToken(Map<String, Object> claims, String userName) {
    return Jwts.builder()
        .setClaims(claims)
        .setSubject(userName)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        // .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
        .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
  }
  
  public String generateToken(String userName) {
    Map<String, Object> claims = new HashMap<>();
    return createToken(claims, userName);
  }
  
}
